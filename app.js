const arguments = process.argv.splice(2)

function findArea(radius){
    console.log(`Area of ${radius} circle is: ${Math.PI * radius * radius}²`)
}

findArea(arguments[0]);