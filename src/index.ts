import {Command, flags} from '@oclif/command'
import main from './main'

class NpmInstallMeMaybe extends Command {
  static description = 'describe the command here'

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({char: 'v'}),
    help: flags.help({char: 'h'}),
  }

  static args = [{
    name: 'file',
    required: false,
    description: 'output file',
    hidden: true,               // hide this arg from help
    parse: (input: string) => 'output',   // instead of the user input, return a different value
    default: 'world',           // default value if no arg input
    options: ['a', 'b'],        // only allow input to be from a discrete set
  }
  ]

  async run() {
    const {args, flags} = this.parse(NpmInstallMeMaybe)

    main(args,flags)




    console.log(args)


  }
}

export = NpmInstallMeMaybe
