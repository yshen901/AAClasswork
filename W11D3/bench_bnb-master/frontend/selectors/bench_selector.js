export const getBenches = (benches) => {
  return Object.keys(benches).map(
    (idx) => {
      return benches[idx];
    }
  )
}