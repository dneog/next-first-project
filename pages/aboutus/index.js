import Link from "next/link"

const aboutus = () => {
  return (
    <div>
    <ul>
      <li><Link href='/aboutus/dev1'>Yash</Link></li>
      <li><Link href='/aboutus/dev2'>Vaibhav</Link></li>
      <li><Link href='/aboutus/dev3'>Suresh</Link></li>
    </ul>
    </div>
  )
}

export default aboutus