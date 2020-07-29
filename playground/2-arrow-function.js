// const square = (x) => x*x

// console.log(square(2))

const event = {
    name : 'birthday party',
    guestlist : ['kshitiz','akash','snigdh'],
    printguestlist(){

        console.log('Guest list for '+this.name)
        this.guestlist.forEach((guest) => {
            console.log(guest+' is attending '+this.name)
        })
    }
}

event.printguestlist();