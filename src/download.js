const util = require('util');
const exec = util.promisify(require('child_process').exec);

const wget = async (params) => {
	if (Array.isArray(params))
		params = params.join(' ');

	try {
    const { stdout, stderr } = await exec(`wget ${params}`);
    console.log(stdout);
	
		if(stderr)
			console.error(stderr);
  } catch (e) {
    console.error(e); // should contain code (exit code) and signal (that caused the termination).
  }
}

const download = async (url) => {
	await wget([
		'--mirror',
		'--recursive',
//		'--no-parent',
		'--convert-links',
		'--page-requisites',
		'--adjust-extension',
		'-erobots=off',
		`--domains ${url}`,
		url
	]);

	console.log("end");
};

module.exports = download;
