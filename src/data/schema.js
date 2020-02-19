export default {
  name: 'equipment_ddsw',
  namespace: 'com.cat',
  type: 'record',
  fields: [
    {
      name: 'my_bytes',
      type: 'bytes',
      aliases: ['A1'],
      doc: 'this is the documentation'
    },
    { name: 'my_string', type: 'string' },
    { name: 'my_nullrable_string', type: ['null', 'string'] },
    { name: 'my_double', type: 'double' },
    { name: 'my_nullrable_double', type: ['null', 'double'] },
    {
      name: 'my_nullrable_array_of_nullable_int',
      type: [
        'null',
        {
          type: 'array',
          items: ['null', 'int']
        }
      ]
    },
    {
      name: 'nullrable_map_of_nullable_array_of_record',
      type: [
        'null',
        {
          type: 'map',
          values: [
            'null',
            {
              type: 'array',
              items: [
                'null',
                {
                  type: 'record',
                  fields: [
                    {
                      name: 'god.enum',
                      type: { type: 'enum', symbols: ['GOD', 'CHRIS'] }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    { name: 'my_map', type: { type: 'map', values: 'long' } },
    { name: 'my_array', type: { type: 'array', items: 'string' } },
    { name: 'my_enum', type: { type: 'enum', symbols: ['coffee', 'tea'] } }
  ]
};
