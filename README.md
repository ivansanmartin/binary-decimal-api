# binary-decimal-api

# Project.

This REST API is incredibly user-friendly, making it an excellent tool for developers seeking hands-on experience with frontend application development. You can utilize it to practice fetching data from endpoints and showcasing your prowess in consuming REST APIs...

# 📡 USE

# BINARY to DECIMAL Conversion 💹🔢

🚀 `GET https://ivansanmartin.vercel.app/project/api/binary_to_decimal/{binaryNumber}`

✅ Response example (OK 202):

`GET GET https://ivansanmartin.vercel.app/project/api/binary_to_decimal/11111111`

- Response:
  
```json


{
    "ok": true,
    "binary_number": "11111111",
    "decimal_convert": "255",
    "conversion_date": "17/8/2023"
}
```

🔴 Bad request (400):

You get "code 400" for not correctly binary structure of part the client

- Example:

```json
{
    "ok": false,
    "NOT_VALID_BINARY": "The binary number is not valid"
}
```



# DECIMAL to Binary Conversion 🔢➡️💡


🚀 `GET https://ivansanmartin.vercel.app/project/api/decimal_to_binary/{decimalNumber}`

✅ Response example (OK 202):

`GET https://ivansanmartin.vercel.app/project/api/decimal_to_binary/255`

- Response:

  
```json
{
    "ok": true,
    "decimal_number": "255",
    "binary_number": "11111111",
    "conversion_date": "17/8/2023"
}
```

📊 Parameters:

- padding_ipv4=true
  
  -  The parameter "padding_ipv4=true" is used to ensure that when converting decimal numbers to binary for IPv4 addresses, the resulting binary representation maintains a consistent length of 8 bits per octet, adding leading zeros if needed

Example with the decimal number: "1"
 
  `GET http://ivansanmartin.vercel.app/project/api/decimal_to_binary/1/?padding_ipv4=true`
 
Response:

```json
{
    "ok": true,
    "decimal_number": "1",
    "binary_convert": "00000001",
    "ipv4": true,
    "conversion_date": "19/8/2023"
}

```




🔴 Bad request (400):

You get "code 400" for not correctly number structure of part the client (negative numbers)

- Example:

```json
{
    "ok": false,
    "NOT_VALID_DECIMAL": "The decimal number is not valid"
}
```



# 📚 Used technologies

<pre>
  <code>

╭─╮  🖥️ Back-end
┃  ════════════════════
╰─╮
  ├─ 👩‍💻 Node.js
  │     └─ 📚 Framework
  │         └─ 🚀 Express.js
  ╰──────────────────╯
    
  </code>
</pre>

# 📁 Directories structure 📁

<pre>

  <code>
       src/
    │   .gitignore
    │   package-lock.json
    │   package.json
    │   main.js
    │
    └───routes/
    │   api.js

  </code>

</pre>



# 🤝 Backend Collaborators

- ivansanmartin (<a href="https://github.com/ivansanmartin">View Github profile</a>)
