console.log('test')


var input = prompt('What would you like to Do')

function toDo(input) {
    var list = []
while (input.indexOf('quite') == -1 ) {
     input = prompt('What would you like to Do')
     switch (input) {
        case 'add':
            var item = prompt('Add to list')
            list.push(item)
            console.log(list)
            break;

        case 'list':
            console.log(list)
            break;

        default:
            break;
    }
}
   
}


toDo(input)