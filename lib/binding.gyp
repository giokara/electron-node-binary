{
  "targets": [
    {
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
      "target_name": "back-addon",
      "sources": [ "back-addon.cpp" ]
    }
  ]
}
