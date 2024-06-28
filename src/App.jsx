import { useState } from "react";

function App() {
	const [khodam, setKhodam] = useState("");
	const [nama, setNama] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [checked, setChecked] = useState(false);

	const hewan = [
		"Sapi sange",
		"Pocong kikir",
		"Banteng Pdi",
		"Pakkai",
		"Babi",
		"Kunti Joget",
		"Taik item",
		"Kunti sange",
	];

	const tampilkanHewanAcak = () => {
		if (nama.length <= 3) {
			setError("Isi nama dulu cuk, min 5");
			return;
		}
		setLoading(true);
		setChecked(true);
		const indeksAcak = Math.floor(Math.random() * hewan.length);
		const hewanAcak = hewan[indeksAcak];

		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000);

		setTimeout;
		setKhodam(hewanAcak);

		return () => clearTimeout(timer);
	};

	const handleReset = () => {
		setNama("");
		setError("");
		setKhodam("");
		setChecked(false);
	};

	const handleChangeNama = (e) => {
		setError("");
		setNama(e.target.value);
	};

	console.log(loading);

	return (
		<div className="h-screen bg-primary flex items-center justify-center">
			{checked ? (
				loading ? (
					<div className="text-secondary border-[1px] p-4 w-96 rounded-md flex flex-col items-center gap-4 shadow-md shadow-white">
						<div className="animate-spin">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"
							>
								<path
									stroke="none"
									d="M0 0h24v24H0z"
									fill="none"
								/>
								<path d="M12 3a9 9 0 1 0 9 9" />
							</svg>
						</div>
					</div>
				) : (
					<div className="text-secondary border-[1px] p-4 w-96 rounded-md flex flex-col items-center gap-4 shadow-md shadow-white">
						<span className="">
							Khodamnya{" "}
							<span className="font-bold capitalize">
								"{nama}"
							</span>
						</span>
						<span className="text-4xl text-white">{khodam}</span>
						<button
							onClick={handleReset}
							className="border-[1px] rounded-md px-1 bg-secondary bg-opacity-40 hover:scale-105 duration-300"
						>
							Reset
						</button>
					</div>
				)
			) : (
				<div className="text-secondary border-[1px] p-4 w-96 rounded-md flex flex-col items-center gap-4 shadow-md shadow-white ">
					<span className="font-bold font-mono">
						CHECK KDHODAM LU BOS
					</span>
					<input
						onChange={handleChangeNama}
						className="w-full px-2 py-1 rounded-md text-black"
						placeholder="Nama lu"
					></input>
					{error && <p className="text-red-500">{error}</p>}

					<button
						onClick={tampilkanHewanAcak}
						className="border-[1px] rounded-md px-1 bg-secondary bg-opacity-40 hover:scale-105 duration-300"
					>
						{" "}
						Check
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
