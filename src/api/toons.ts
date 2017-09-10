

export function getInfo(toon:string): Promise<any>{

  return Promise.resolve({
    name: toon,
    test: "test"
  });
}
