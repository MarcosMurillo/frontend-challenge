const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.get('/orders/:id', (req, res) => {
  if (req.params.id != '1') {
    return res.status(404).json({ message: `Order ${req.params.id} not found.`, detail: 'Ensure that the id included in the request are correct.' })
  }

  res.json({
    header: {
      number: 4510001114,
      serial: 11223344,
      buyer: 'MTP West Buyer',
      price: 20000,
      currency: 'USD',
      createdAt: '2020-04-16T15:32:55.382Z',
      status: 'Need to confirm',
      contact: {
        name: 'Jacksonville Group (Jason Burn)',
        email: 'jacksonvillegroup@me.com',
        phone: '903-575-3050',
        fax: '999-575-3050'
      },
    },
    supplier: {
      code: '101908',
      name: 'Motion Industries INC.',
      readAt: '2020-05-23T12:45:20.399Z',
      lastReplyAt: '2020-05-23T13:00:10.380Z',
      document: {
        type: 'CNPJ',
        value: '00.823.053/0001-02'
      },
      address: 'O Box 1477 - Birmingham AL - 35201-4666 - United States of America',
      contact: {
        name: 'Jack Jeff Ripple Applejack',
        email: 'jack_jeff_applejack@motion.com',
        phone: '800-296-5522',
        fax: '800-296-5522'
      }
    },
    addresses: [{
      label: 'Ship to',
      name: 'West Plant',
      code: 'TR01',
      address: '1311 W Washington Blvd, Los Angeles, CA 90006, United States',
      contact: {
        name: 'Brian Mazda Tetsuo',
        email: 'Z01confirmations@me.com',
        phone: '222-575-3050',
        fax: '222-575-3050'
      }
    }, {
      label: 'Bill to',
      name: 'Pilgrims Pride Corp.',
      code: null,
      address: '1301 Glendale Blvd, Los Angeles, CA 90026, USA',
      contact: {
        name: 'Barbara Streifes Hasseublad',
        email: 'Z01confirmations@me.com',
        phone: '222-506-8000',
        fax: '222-506-8000'
      }
    }, {
      label: 'Charge to',
      name: 'Lorem Ipsum',
      code: null,
      address: '2222 Promontory CR, Greeley, CO 22222-9039 - EUA',
      contact: {
        name: 'Barbara Streifes Hasseublad',
        email: 'lorem.ipsum@me,com',
        phone: '970-222-8000',
        fax: '970-222-8000'
      }
    }]
  })
});

app.listen(process.env.PORT || 3100, () => {
  console.log('API running!')
});
