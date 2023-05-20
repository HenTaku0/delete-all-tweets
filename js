let deleteTweets = setInterval(() => {
  for (const d of document.querySelectorAll('div[data-testid="caret"]')) {
    d.click();
    document.querySelector('div[role="menuitem"]').click();
    document.querySelector('div[data-testid="confirmationSheetConfirm"]').click();
  }
}, 1000);
