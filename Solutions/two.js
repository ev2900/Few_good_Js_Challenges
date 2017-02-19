function isprime(number) {
	if (number == 1) {
		return true;
    }
	else if (number == 2) {
		return true; 
    }
	else {
		for(var i = 2; i < number; i++) {
			if(number%i == 0) {
				return false;
            }
			else {
				return true;
            }		
        }	
	}
}

isprime(7)