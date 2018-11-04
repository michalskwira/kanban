process.stdin.setEncoding('utf8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if(input !== null) {
    	var instruction = input.toString().trim();
    	switch (instruction) {
    		case '/exit':
    			process.stdout.write('Quiting app!\n');
    			process.exit();
    			break;
			case '/processEnv':
				process.stdout.write('\nNode.js Version\n')
				process.stdout.write(process.version);
				process.stdout.write('\n\nOS Version\n');
				process.stdout.write(process.env.OS);
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
    	}
    }
});