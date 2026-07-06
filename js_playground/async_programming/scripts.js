const result = document.getElementById('result');
let approval = 'Not approved'

/**
 * function getApproval(callback){
    setTimeout(() => {
        approval = "Approved"
        callback()
    }, 500)
}


setTimeout(() => {
        approval = "Approved"
    }, 500)

getApproval(() => {
    result.textContent = approval
})

 */

//////////////////

 function getApproval(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Approved!')
        }, 500)
    })
}
 
/*
 *getApproval().then(
    (resolvedApproval) => {
        result.textContent = resolvedApproval
    }
)*/

async function setApprovalText() {
    const aprrovalPromise = getApproval()
    result.textContent = await aprrovalPromise
}

setApprovalText()


 result.textContent = approval