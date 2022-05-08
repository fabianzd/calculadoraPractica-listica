import Section from '../components/Section'

export default function Home() {
  return (
    <div id='main'>

      <Section />

      <style jsx>{`
      #main {
        min-height: 100vh;
        display: grid;
        place-content: center;
      }
      `}</style>
    </div>
  )
}
