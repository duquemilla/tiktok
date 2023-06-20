import React from "react";
import "./videoFooter.css";
import MusicNoteOutlinedIcon from '@mui/icons-material/MusicNoteOutlined';

function VideoFooter({name, description, music}) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@{ name }</h3>
        <p>{ description }</p>
        <div className="videoFooter__music">
          <MusicNoteOutlinedIcon className="videoFooter__icon" />
          <div className="videoFooterMusic__text">
            <p>{ music }</p>
          </div>
          
        </div>
      </div>
      <img 
        className="videoFooter__record"
        alt="Imagem de um vinil girando"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
