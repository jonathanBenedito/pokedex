export function AddLeadingZeros(number) {
  return Math.floor(number).toString().padStart(5, "0");
}
