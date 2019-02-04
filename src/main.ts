import fs from "fs";
import crypto from 'crypto'
import {spawn} from 'child_process'


export default (args: any, flags: any) => {


  const outfile = '.installmemaybe'


  const existingHash = fs.existsSync(outfile) ? fs.readFileSync(outfile, {encoding: 'utf8'}) : ''


  if (!existingHash) {
    console.log('Could not find hash file, installing packages')
  }

  const isYarn = fs.existsSync('yarn.lock')

  const data = fs.readFileSync(isYarn ? 'yarn.lock' : 'package-lock.json', {encoding: 'utf8'})

  const hash = crypto
    .createHash('sha1')
    .update(data.toString(), 'utf8')
    .digest('hex')

// if there is an eviorment varble then delete stored hash

  if (hash !== existingHash) {
    const dir = spawn('npm', ['i'])


    // dir.stdout.on('data', data => console.log(`stdout: ${data}`))
    // dir.stderr.on('data', data => console.log(`stderr: ${data}`))
    // dir.on('close', code => console.log(`child process exited with code ${code}`))

  } else {
    console.log('Not installing ')
  }

  fs.writeFileSync('.installmemaybe', hash, {encoding: 'utf8'})


}
