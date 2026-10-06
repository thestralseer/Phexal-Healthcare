<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <title>XML Sitemap | Phexal Healthcare</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f8fafc;
            color: #1e293b;
            padding: 30px 20px;
            line-height: 1.5;
          }
          .container {
            max-width: 1080px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 16px;
            box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.06);
            border: 1px solid #e2e8f0;
            overflow: hidden;
          }
          .header {
            background: linear-gradient(135deg, #07192f 0%, #006591 100%);
            color: #ffffff;
            padding: 28px 32px;
          }
          .header h1 {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 6px;
            letter-spacing: -0.5px;
          }
          .header p {
            font-size: 13px;
            color: #bae6fd;
          }
          .stats {
            background: #f1f5f9;
            padding: 12px 32px;
            border-bottom: 1px solid #e2e8f0;
            font-size: 12px;
            color: #475569;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            font-size: 13px;
          }
          th {
            background: #f8fafc;
            color: #475569;
            font-weight: 700;
            text-align: left;
            padding: 12px 20px;
            border-bottom: 2px solid #e2e8f0;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
          }
          td {
            padding: 12px 20px;
            border-bottom: 1px solid #f1f5f9;
            vertical-align: middle;
          }
          tr:hover td {
            background-color: #f8fafc;
          }
          a {
            color: #006591;
            text-decoration: none;
            font-weight: 600;
            word-break: break-all;
          }
          a:hover {
            color: #0284c7;
            text-decoration: underline;
          }
          .badge {
            display: inline-block;
            padding: 3px 8px;
            border-radius: 6px;
            font-size: 11px;
            font-weight: 700;
            background: #e0f2fe;
            color: #0369a1;
          }
          .badge-high {
            background: #dcfce7;
            color: #15803d;
          }
          .footer {
            padding: 16px 32px;
            background: #ffffff;
            border-top: 1px solid #e2e8f0;
            font-size: 11px;
            color: #94a3b8;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Phexal Healthcare — XML Sitemap</h1>
            <p>Standard search engine index mapping generated for Google, Bing, and AI search crawlers.</p>
          </div>
          <div class="stats">
            <span>Total URLs: <strong><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></strong></span>
            <span>Index Status: <strong>Live &amp; Crawlable</strong></span>
          </div>
          <table>
            <thead>
              <tr>
                <th style="width: 55%;">URL / Location</th>
                <th style="width: 15%;">Priority</th>
                <th style="width: 15%;">Change Frequency</th>
                <th style="width: 15%;">Last Modified</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td>
                    <a href="{sitemap:loc}">
                      <xsl:value-of select="sitemap:loc"/>
                    </a>
                  </td>
                  <td>
                    <span class="badge">
                      <xsl:if test="number(sitemap:priority) &gt;= 0.8">
                        <xsl:attribute name="class">badge badge-high</xsl:attribute>
                      </xsl:if>
                      <xsl:value-of select="sitemap:priority"/>
                    </span>
                  </td>
                  <td>
                    <xsl:value-of select="sitemap:changefreq"/>
                  </td>
                  <td style="color: #64748b; font-size: 12px;">
                    <xsl:value-of select="sitemap:lastmod"/>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            © Phexal Healthcare Private Limited • 762, Makanpur, Nyay Khand I, Indirapuram, Ghaziabad, UP 201014
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
