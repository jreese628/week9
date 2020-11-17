function outerFunction() {
    var  pii = {name: ('John Doe')};
    console.log(pii)
    function innerFucntion() {
        var pii = {ssn: 1234567};
    }

}

outerFunction();