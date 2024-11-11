import React from "react";

interface Activity {
  name: string;
  company: string;
  date: string;
}

interface ActivityListProps {
  activities: Activity[];
  year: string;
  semester: string;
}

const ActivityList: React.FC<ActivityListProps> = ({ activities, year, semester }) => {
  return (
    <div
      className="activity-list"
      style={{
        border: '2px solid #eee',
        padding: '20px',
        maxWidth: '4000px',
        backgroundColor: 'white'
      }}
    >
      <div
        className="activity-header"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px'
        }}
      >
        <div>
          <div
            className="activity-year"
            style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginLeft: '4px'
            }}
          >
            {year}
          </div>
          <div
            className="activity-semester"
            style={{
              fontSize: '14px',
              color: '#595959',
              marginLeft: '4px',
            }}
          >
            {semester}
          </div>
        </div>
        <div
          className="activity-count"
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            textAlign: 'right',
            marginRight: '20px'
          }}
        >
          {activities.length}
          <div
            className="activity-count-label"
            style={{
              fontSize: '14px',
              fontWeight: 'normal',
            }}
          >
            Activities
          </div>
        </div>
      </div>
      <hr />
      {activities.map((activity, index) => (
        <div
          key={index}
          className="activity-item"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '10px',
            marginLeft: '4px',
            padding: '10px',
          }}
        >
          <div
            className="activity-details"
            style={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div
              className="activity-avatar"
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                backgroundColor: '#eee',
                marginRight: '20px'
              }}
            ></div>
            <div>
              <div
                className="activity-name"
                style={{
                  fontWeight: 'bold'
                }}
              >
                {activity.name}
              </div>
              <div
                className="activity-company"
                style={{
                  color: '#595959',
                  fontWeight: 'normal',
                  fontSize: 'small',
                  marginTop: '2px'
                }}
              >
                {activity.company}
              </div>
            </div>
          </div>
          <div
            className="activity-date"
            style={{
              color: '#BEBEBE',
              marginRight: '4px'
            }}
          >
            {activity.date}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityList;
