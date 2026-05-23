const useCopyClipboard = () => {
  const copyToClipboard = async text => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(text);
      }
    } catch (error) {
      console.error("Failed to copy to clipboard: ", error);
    }
  };

  const getTextFromClipboard = async () => {
    try {
      if (navigator.clipboard) {
        const text = await navigator.clipboard.readText();
        return text;
      }
      return "";
    } catch (error) {
      console.error("Failed to read from clipboard: ", error);
      return "";
    }
  };

  return { copyToClipboard, getTextFromClipboard };
};

export default useCopyClipboard;
