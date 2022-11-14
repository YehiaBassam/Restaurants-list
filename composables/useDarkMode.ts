const useDarkMode = () => {
  const isDarkMode = useState("DarkMode", () => false);

  const toggleDarkMode = () => {
    isDarkMode.value = !isDarkMode.value;
  }

  return { isDarkMode, toggleDarkMode };
}
export default useDarkMode;
