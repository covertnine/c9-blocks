const { G, Path, SVG, Rect } = wp.components;

const icons = {
	top: (
		<SVG
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 20 20"
			style={{ enableBackground: "new 0 0 20 20;" }}
		>
			<style type="text/css">
				{`
   .st0{opacity:0.2;enable-background:new    ;}
   .st1{fill:none;}
   .st2{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
   .st3{fill:none;stroke:#231F20;stroke-width:0.5;stroke-miterlimit:10;}`}
			</style>
			<Path class="st0" d="M0,20h20V0H0V20z" />
			<G>
				<Rect y="-4.9" class="st1" width="20" height="20" />
				<G>
					<Path d="M0.9,1.7V9h18.2V1.7H0.9z" />
				</G>
				<line className="st2" x1="18.2" y1="7.3" x2="1.9" y2="7.3" />
				<line className="st2" x1="18.2" y1="5.3" x2="1.9" y2="5.3" />
				<line className="st2" x1="18.2" y1="3.3" x2="1.9" y2="3.3" />
			</G>
			<G id="arrow">
				<G>
					<line className="st3" x1="10" y1="15.5" x2="10" y2="11.3" />
					<line className="st3" x1="8.5" y1="12.6" x2="10.1" y2="10.7" />
					<line className="st3" x1="11.5" y1="12.6" x2="9.9" y2="10.7" />
				</G>
			</G>
		</SVG>
	),
	center: (
		<SVG
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 20 20"
			style={{ enableBackground: "new 0 0 20 20;" }}
		>
			<style type="text/css">
				{`
   .st0{fill:none;}
   .st1{opacity:0.2;}
   .st2{fill:#FFFFFF;stroke:#FFFFFF;stroke-miterlimit:10;}
   .st3{fill:none;stroke:#231F20;stroke-width:0.5;stroke-miterlimit:10;}`}
			</style>
			<G id="Layer_1">
				<Rect class="st0" width="20" height="20" />
				<Path class="st1" d="M0,20h20V0H0V20z" />
				<G>
					<Path d="M19.1,13.4V6.1H0.9v7.3H19.1z" />
				</G>
				<line className="st2" x1="1.8" y1="7.8" x2="18.1" y2="7.8" />
				<line className="st2" x1="1.8" y1="9.8" x2="18.1" y2="9.8" />
				<line className="st2" x1="1.8" y1="11.8" x2="18.1" y2="11.8" />
			</G>
			<G id="arrow">
				<G>
					<line className="st3" x1="10" y1="1" x2="10" y2="4.3" />
					<line className="st3" x1="11.3" y1="3.3" x2="9.9" y2="4.7" />
					<line className="st3" x1="8.8" y1="3.3" x2="10.2" y2="4.7" />
				</G>
				<G>
					<line className="st3" x1="10" y1="19.2" x2="10" y2="15.9" />
					<line className="st3" x1="8.8" y1="16.9" x2="10.2" y2="15.5" />
					<line className="st3" x1="11.3" y1="16.9" x2="9.9" y2="15.5" />
				</G>
			</G>
		</SVG>
	),
	bottom: (
		<SVG
			version="1.1"
			id="Layer_1"
			xmlns="http://www.w3.org/2000/svg"
			x="0px"
			y="0px"
			viewBox="0 0 20 20"
			style={{ enableBackground: "new 0 0 20 20;" }}
		>
			<style type="text/css">
				{`
   .st0{opacity:0.2;enable-background:new    ;}
   .st1{fill:none;}
   .st2{fill:none;stroke:#FFFFFF;stroke-miterlimit:10;}
   .st3{fill:none;stroke:#231F20;stroke-width:0.5;stroke-miterlimit:10;}`}
			</style>
			<Path class="st0" d="M0,20h20V0H0V20z" />
			<G>
				<Rect y="5.6" class="st1" width="20" height="20" />
				<G>
					<path d="M19.1,19v-7.3H0.9V19H19.1z" />
				</G>
				<line className="st2" x1="1.8" y1="13.4" x2="18.1" y2="13.4" />
				<line className="st2" x1="1.8" y1="15.4" x2="18.1" y2="15.4" />
				<line className="st2" x1="1.8" y1="17.4" x2="18.1" y2="17.4" />
			</G>
			<G id="arrow">
				<G>
					<line className="st3" x1="10" y1="4.2" x2="10" y2="8.4" />
					<line className="st3" x1="11.5" y1="7.2" x2="9.9" y2="9" />
					<line className="st3" x1="8.5" y1="7.2" x2="10.1" y2="9" />
				</G>
			</G>
		</SVG>
	)
};

export default icons;