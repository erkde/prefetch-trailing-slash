export default function Hello({ name }) {
  return <div>Hello {name}</div>
}

export function getStaticProps(context) {
  return {
    props: {
      name: context.params.name
    }
  };
}

export function getStaticPaths() {
  return {
    paths: [
      { params: { name: 'world' } }
    ],
    fallback: false
  };
}