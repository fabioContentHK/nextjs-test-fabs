// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  
  const result = await fetch(
    `https://api.selzy.com/en/api/subscribe?format=json&api_key=` + process.env.NEXT_PUBLIC_UNISENDER + `&list_ids=3&fields[email]=test4@example.org&fields[Name]=John+Doe&double_optin=0&tags=RedRoseCustomer`
  )
  .then((response) => response.text())
  .then(result => {
    res.status(200).json(result)
  });

}
