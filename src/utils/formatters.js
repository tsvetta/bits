export function formatNumber(num/*: number | string*/, delimiter = '\u00A0' /*: string*/) /*: string*/ {
  const breakNumberReg = /(\d)(?=(\d{3})+([^\d]|$))/g;

  return String(num).replace(breakNumberReg, `$1${delimiter}`);
}
