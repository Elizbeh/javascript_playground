const fileSystem = {
  name: "root",
  type: "folder",
  children: [
    {
      name: "Documents",
      type: "folder",
      children: [
        { name: "resume.pdf", type: "file" },
        { name: "coverletter.docx", type: "file" }
      ]
    },
    {
      name: "Photos",
      type: "folder",
      children: [
        {
          name: "Vacations",
          type: "folder",
          children: [
            { name: "beach.png", type: "file" },
            { name: "mountain.png", type: "file" }
          ]
        }
      ]
    },
    { name: "todo.txt", type: "file" }
  ]
};

const countFiles = (node) => {
    //Base case
    if (node.type === 'file') return 1
    let totalNumOfFile = 0
    for (let child of node.children) {
        totalNumOfFile += countFiles(child)
    }
    return totalNumOfFile
}

const countFolder= (node) => {
    if (node.type === "file" ) return 0
    let totalFolder = 1
    for (let child of node.children) {
        totalFolder += countFolder(child)
    }
    return totalFolder
}


//console.log(countFiles(fileSystem)) // → 5

console.log(countFolder(fileSystem))