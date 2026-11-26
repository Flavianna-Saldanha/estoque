import type { ReactNode } from "react";

type Props = {
	title: string;
	leftSide?: ReactNode;
	rightSide?: ReactNode;
};
export const PageTitle = ({ title, leftSide, rightSide }: Props) => {
	return (
		<header className="page-title">
			{leftSide && <div className="page-title-side">{leftSide}</div>}
			<h1 className="page-title-heading">{title}</h1>
			{rightSide && <div className="page-title-side">{rightSide}</div>}
		</header>
	);
};
