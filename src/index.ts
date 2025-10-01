import { Hono } from 'hono'
import { v4 as uuidv4 } from 'uuid';
import { logger } from 'hono/logger';

const app = new Hono();
app.use(logger())

app.get('/userinfo', (c) => {
  const uuid = uuidv4();
  const resp = {
    email: 'john@doe.com',
    phone_number: '+4791936117',
    family_name: 'Doe',
    given_name: 'John',
    sub: uuid,
    address: {
      country: 'NO',
      street: 'Norway Street',
      houseNumber: '1',
      floor: undefined,
      floorType: undefined,
      entrance: undefined,
      suite: undefined,
      postalCode: '1234',
      postalPlace: 'Oslo'
    }
  }
  console.log(uuid);
  console.log(resp);
  return c.json(resp, 200);
})

export default app
