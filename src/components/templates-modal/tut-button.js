export const TutButton = ({ title, url }) => {
	return (
		<div className="c9-type-heading">
			<a href={url} target="_blank">
				<h4>{title}</h4>
			</a>
		</div>
	);
};
