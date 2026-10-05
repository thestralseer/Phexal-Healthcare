export function formatInr(amount: number): string {
 return new Intl.NumberFormat('en-IN', {
 style: 'currency',
 currency: 'INR',
 maximumFractionDigits: 0,
 }).format(amount);
}

export function formatUsd(amount: number): string {
 return new Intl.NumberFormat('en-US', {
 style: 'currency',
 currency: 'USD',
 maximumFractionDigits: 0,
 }).format(amount);
}
