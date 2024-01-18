import TheNews from "@/app/components/TheNews"

const TheNewsPage = ({params: { name }}) => {
  return (
	<div>
		<TheNews id={name} />
	</div>
  )
}

export default TheNewsPage
