import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Link as="/world" href="/[name]">
        <a>Hello world</a>
      </Link>
    </div>
  )
}
