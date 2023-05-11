# Builder pattern in tests

## Instructions

There's a bug in the production code but all tests pass!

Your first task is to find the bug and fix it, and understand
*why* it was not caught by the tests.

Your second task is to look up the *Builder* design pattern and
see if it can help.

## Solution

Don't read if you don't want to get spoiled.

The bug is the same in all languages and is there:

```javascript
function canOrder (user) {
  if (user.age <= 18) {
    return false
  }

  if (!user.verified) {
    return true // <- Should be: return false
  }

  return true
}

```

The bug was not caught because we also a bug in the tests:

```javascript
test('must be a verified user to order from the shop', t => {
  const user = new User({ name: "Bob", "email": "bob@domain.tld", age: 16, address: fsfAddress, verified: false })
  // Should age an age greater than 18
})
```
```

