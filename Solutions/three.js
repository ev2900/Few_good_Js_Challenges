array = [{ num: [1, 1, 100] , type: 'sum' }, { num: [1, 32, 100, 12, 3, 1, 0, -12] , type: 'multiply' }]

function reduceMath (array) {
	array.reduce(function(a,b) {
		if(a.type == "sum") {
				a.num.reduce(function(c,d) { 
				e = c + d;
				return e;
			})	
    	}
		else if(a.type == "multiply") {
			a.num.reduce(function(c,d) { 
				e = c * d;
				return e;
			})
    	}
		return e;
	})
}

reduceMath(array)