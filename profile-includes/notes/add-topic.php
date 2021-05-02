<html>
    <form action="" class="add-topic-form">
        <div class="exit-topic">
        <svg xmlns="http://www.w3.org/2000/svg" width="6.01" height="6.01" viewBox="0 0 6.01 6.01"><g transform="translate(-2415.615 -1656.5)"><g transform="translate(2415.615 1657.561) rotate(-45)" fill="#fff" stroke="#b6b6b6" stroke-width="1">
            <rect width="1.5" height="7" rx="0.75" stroke="none"/><rect x="0.5" y="0.5" width="0.5" height="6" rx="0.25" fill="none"/>
           </g><g transform="translate(2420.564 1656.5) rotate(45)" fill="#fff" stroke="#b6b6b6" stroke-width="1"><rect width="1.5" height="7" rx="0.75" stroke="none"/><rect x="0.5" y="0.5" width="0.5" height="6" rx="0.25" fill="none"/></g></g></svg>
        </div>
        <h3>Create Topic</h3>
        <input id="new-topic" type="text" placeholder="Create new topic">
        <div>
          <input id="datalist" list="currentLists" name="createlist" value="" placeholder="Add to current topic">
           <datalist id="currentLists">
           </datalist>
        </div>
        <button type="submit" name="submit-topic" id="formBtn">Submit</button>
    </form>
</html>