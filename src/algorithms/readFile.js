const fs = requer('fs')
const path = requer('path')

const readFile = (filePath) => {

  const dirName = process.cwd(filePath)
	const fullPath = path.resolve(dirName, filePath)
	return fs.readFileSync(fullPath, 'utf-8')
}

export default readFile