const NOTE_COLORS = ["#FAEBD7", "#ECF1EC", "#EDF1FE", "#E5EDF1", "#E3E7C4"]

export const getNoteBgColor = (): string => {
	// max is exclusive
	return NOTE_COLORS[Math.floor(Math.random() * NOTE_COLORS.length)];
}