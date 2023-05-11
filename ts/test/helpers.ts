import Address from "../address"
import User from "../user"

const FSF_ADDRESS = new Address(
  "51 Franklin Street",
  "Fifth Floor",
  "Boston",
  "02110",
  "USA"
)

const PARIS_ADDRESS = new Address(
  "33 quai d'Orsay",
  "",
  "Paris",
  "75007",
  "France"
)

type BuildUserOpts = {
  minor?: boolean
  foreign?: boolean
  verified?: boolean
}

export const buildUser = (name: string, opts: BuildUserOpts = {}): User => {
  const email = `${name.toLowerCase()}@domain.tld`
  const age = opts.minor ? 16 : 25
  const address = opts.foreign ? PARIS_ADDRESS : FSF_ADDRESS
  // verified is true by default, and must be explicitely set to `false`
  // BuildUserOpots for it to be false
  let verified = true
  if (opts.verified === false) {
    verified = false
  }
  return new User({ name, email, age, verified, address })
}