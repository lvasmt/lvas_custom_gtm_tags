<script>
  function pTracker(eventName,eObject) {
    
    if(typeof eventName == 'undefined'){
      var eventName = 'page_view';
    }
    if(typeof eObject == 'undefined'){
      var eObject = null;
    }
    
    var payload = {
      "user_id": {{cookie - _ga}},
      "event_timestamp": {{cJS - getCurrentTimestamp}} ,
      "event_name": eventName,
      "hostname": {{Page Hostname}},
      "page_url": {{Page URL}},
      "page_referrer": {{Referrer}},
      "event_parameters": [],
      "event_value": null,
      "event_currency": null
    };
  
  for (var k in eObject){
     if (Object.keys(payload).includes(k)){
       payload[k] = eObject[k];
      };
  };

    fetch("<your web analytics api URL>", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(function(response) {
      console.log("Payload sent successfully:", response);
    }).catch(function(error) {
      console.error("Error sending payload:", error);
    });
  };
  
</script>
