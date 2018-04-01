function generateChildren(){
  let a = [];
  for(var i=0;i<90000;i++){
    a.push({
      id:`1-2-${i}`,
      name:`1-2-${i}`,
      level:3,
    })
  }
  return a;
}
export default [{
  id:"1",
  name:"1",
  level:1,
  children:[
    {
      id:"1-1",
      name:"1-1",
      level:2,
      children:[
        {
          id:"1-1-1",
          name:"1-1-1",
          level:3,
        },
        {
          id:"1-1-2",
          name:"1-1-2",
          level:3,
        },
        {
          id:"1-1-3",
          name:"1-1-3",
          level:3,
        },
        {
          id:"1-1-4",
          name:"1-1-4",
          level:3,
        },
        {
          id:"1-1-5",
          name:"1-1-6",
          level:3,
        },
        {
          id:"1-1-6",
          name:"1-1-6",
          level:3,
        },
      ]
    },
    {
      id:"1-2",
      name:"1-2",
      level:2,
      children: generateChildren()
    },
    {
      id:"1-3",
      name:"1-3",
      level:2,
      children:[
        {
          id:"1-3-1",
          name:"1-3-1",
          level:3,
        },
        {
          id:"1-3-2",
          name:"1-3-2",
          level:3,
        },
        {
          id:"1-3-3",
          name:"1-3-3",
          level:3,
        },
      ]
    },
    {
      id:"1-4",
      name:"1-4",
      level:2,
    },
  ]
}]