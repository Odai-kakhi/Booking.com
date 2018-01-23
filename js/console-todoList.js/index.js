console.log('test')


var input = prompt('What would you like to Do')

function toDo(input) {
    var list = []
    while (input.indexOf('quite') == -1) {
        input = prompt('What would you like to Do')
        switch (input) {
            case 'add':
                var item = prompt('Add to list')
                list.push(item)
                console.log(item + ' adedd to the list')
                break;

            case 'list':
                list.forEach((item) => {
                    console.log(list.indexOf(item) + ' : ' + item)
                })
                break;

            case 'delete':
               console.log('Deleted Item is : ' + list.pop())

                break;

            default:
                break;
        }
    }

}


toDo(input)