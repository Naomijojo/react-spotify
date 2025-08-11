import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ artist, image, name, trackCount = 0 }) => {
  const navigate = useNavigate();

  const handleArtistClick = () => {
    if (name) {
      navigate(`/artist/${encodeURIComponent(name)}`);
    }
  };

  return (
    <div 
      className="artist-card cursor-pointer hover:scale-105 transition-transform duration-200"
      onClick={handleArtistClick}
    >
      <div className="w-full h-48 rounded-lg overflow-hidden mb-3">
        <img 
          src={image || 'https://via.placeholder.com/200x200?text=Artist'} 
          alt={name || 'Artist'} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center">
        <h3 className="font-semibold text-lg mb-1">{name || 'Artist Name'}</h3>
        {trackCount > 0 && (
          <p className="text-sm text-gray-600">{trackCount} tracks</p>
        )}
      </div>
    </div>
  );
};

export default ArtistCard; 