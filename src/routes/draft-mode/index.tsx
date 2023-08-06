import React from "react";
import style from "./draftMode.style";
import hero from "../../json/hero";
import HeroBadge from "../../core/hero-badge";
import DraftCard from "../../core/draft-card";

const DraftMode = () => {
	const heroOptions = hero.getDraftModeHeroOptions();
	const [heroName, setHeroName] = React.useState("Vildred");
	const [details, setDetails] = React.useState<boolean>(false);

	return (
		<div css={style.draftMode}>
			<div css={style.card}>
				<DraftCard heroName={heroName} details={details} />
				<button
					onClick={() => setDetails((prevDetails) => !prevDetails)}
				>
					button
				</button>
			</div>

			<div css={style.draftModeList}>
				{heroOptions.map((heroOption, index) => (
					<button
						key={index}
						onClick={() => setHeroName(heroOption.label)}
					>
						<HeroBadge heroName={heroOption.label} />
					</button>
				))}
			</div>
		</div>
	);
};

export default DraftMode;
