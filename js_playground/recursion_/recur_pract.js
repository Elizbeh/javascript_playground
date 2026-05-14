const commentToTest = {
  content: '1',
  subComments: [
    { content: '1-A', subComments: [] },
    { content: '1-B', subComments: [
        { content: '1-B-a', subComments: [] }
    ]},
    { content: '1-C', subComments: [
        { content: '1-C-a', subComments: [
            { content: '1-C-a-i', subComments: [] },
            { content: '1-C-a-ii', subComments: [] }
        ] },
        { content: '1-C-b', subComments: [] }
    ] },
    { content: '1-D', subComments: [] }
  ] 
};



const countLeafComments = (comment) => {
  if (comment.subComments.length === 0) {
    return comment.content
  }

  let countLeaf = ""
  for (let subComment of comment.subComments) {
    countLeaf += countLeafComments(subComment) + '\n'
  }
  return countLeaf
}

console.log(countLeafComments(commentToTest))
/**const getAllComments = (comment) => {
    let allComments = comment.content
    for (let subComment of comment.subComments) {
        allComments += '\n' + getAllComments(subComment);
    }
    return allComments
}

console.log(getAllComments(commentToTest))**/