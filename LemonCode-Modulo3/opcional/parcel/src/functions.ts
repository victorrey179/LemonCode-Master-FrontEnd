
export function getType() {
  return process.env.MODE;
}

console.log(`Api base: ${process.env.API_BASE}`);

export default getType;
