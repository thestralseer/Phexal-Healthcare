import os
import glob
from concurrent.futures import ThreadPoolExecutor
from PIL import Image

def process_single_product(fpath, prod_dir, public_prod_dir):
    fname = os.path.basename(fpath)
    name_no_ext, ext = os.path.splitext(fname)
    
    # Prefer PNG if available
    source_path = os.path.join(prod_dir, f"{name_no_ext}.png")
    if not os.path.exists(source_path):
        source_path = os.path.join(prod_dir, f"{name_no_ext}.jpg")
        if not os.path.exists(source_path):
            source_path = fpath

    webp_path = os.path.join(prod_dir, f"{name_no_ext}.webp")
    pub_webp_path = os.path.join(public_prod_dir, f"{name_no_ext}.webp")

    try:
        with Image.open(source_path) as img:
            # Save main webp
            img.save(webp_path, 'WEBP', quality=82, method=4)
            img.save(pub_webp_path, 'WEBP', quality=82, method=4)
            
            w, h = img.size
            for target_w in [300, 600, 800]:
                res_path = os.path.join(prod_dir, f"{name_no_ext}-{target_w}w.webp")
                res_pub_path = os.path.join(public_prod_dir, f"{name_no_ext}-{target_w}w.webp")
                if w > target_w:
                    target_h = int(h * (target_w / w))
                    resized = img.resize((target_w, target_h), Image.Resampling.BILINEAR)
                else:
                    resized = img
                resized.save(res_path, 'WEBP', quality=80, method=3)
                resized.save(res_pub_path, 'WEBP', quality=80, method=3)
    except Exception as e:
        print(f"Error {name_no_ext}: {e}")

def process_banner(fpath):
    fname = os.path.basename(fpath)
    name_no_ext, ext = os.path.splitext(fname)
    webp_path = os.path.join('images', f"{name_no_ext}.webp")
    pub_path = os.path.join('public', 'images', f"{name_no_ext}.webp")
    try:
        with Image.open(fpath) as img:
            img.save(webp_path, 'WEBP', quality=82, method=4)
            img.save(pub_path, 'WEBP', quality=82, method=4)
    except Exception as e:
        print(f"Error banner {fname}: {e}")

def main():
    prod_dir = os.path.join('images', 'products')
    public_prod_dir = os.path.join('public', 'images', 'products')
    os.makedirs(prod_dir, exist_ok=True)
    os.makedirs(public_prod_dir, exist_ok=True)

    files = glob.glob(os.path.join(prod_dir, '*.png')) + glob.glob(os.path.join(prod_dir, '*.jpg'))
    unique_names = list(set([os.path.splitext(os.path.basename(f))[0] for f in files]))
    print(f"Converting {len(unique_names)} unique product models using multithreading...")

    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(process_single_product, os.path.join(prod_dir, f"{name}.png"), prod_dir, public_prod_dir) for name in unique_names]
        for f in futures:
            f.result()

    print("Products done. Converting banners...")
    banner_files = glob.glob(os.path.join('images', '*.png')) + glob.glob(os.path.join('images', '*.jpg'))
    with ThreadPoolExecutor(max_workers=8) as executor:
        futures = [executor.submit(process_banner, f) for f in banner_files]
        for f in futures:
            f.result()

    print("All WebP conversions finished successfully!")

if __name__ == '__main__':
    main()
