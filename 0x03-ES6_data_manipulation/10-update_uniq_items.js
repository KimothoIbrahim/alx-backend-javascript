export default function updateUniqueItems(map) {
  if (map.size){
    throw("Cannot process")
  }
  for (const [key, value] of map){
    if (value === 1){
      map.set(key, 100);
    }
  }
  return map;
}
