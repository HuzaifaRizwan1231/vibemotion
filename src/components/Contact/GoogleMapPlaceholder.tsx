import type React from "react"

const GoogleMapPlaceholder: React.FC = () => {
  return (
    <div className="map_container">
      <div className="map">
        <div
          id="googleMap"
          style={{
            width: "100%",
            height: "400px",
            backgroundColor: "#f0f0f0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#666",
            fontSize: "18px",
            border: "1px solid #ddd",
          }}
        >
          Google Maps Placeholder
        </div>
      </div>
    </div>
  )
}

export default GoogleMapPlaceholder
