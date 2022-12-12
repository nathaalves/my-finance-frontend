export function formatMoney(value: number): string {
  let unit = '';
  value /= 100;

  if (Math.abs(value) >= 1000000) {
    value /= 1000000;
    unit = ' mi';
  }

  if (Math.abs(value) >= 1000000000) {
    value /= 1000000000;
    unit = ' bi';
  }

  return value.toLocaleString('pt-br', { minimumFractionDigits: 2 }) + unit;
}
